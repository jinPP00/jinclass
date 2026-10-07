// Static hosting on the existing Oracle Node runtime; no database or framework server.
import http from 'node:http';
import path from 'node:path';
import { stat, readFile } from 'node:fs/promises';
const root = path.resolve(process.env.SITE_ROOT);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.ico':'image/x-icon','.woff2':'font/woff2','.woff':'font/woff','.wasm':'application/wasm','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
http.createServer(async (req,res) => {
  if (!['GET','HEAD'].includes(req.method)) { res.writeHead(405,{Allow:'GET, HEAD'}).end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if (pathname.includes('\0') || pathname.includes('\\') || pathname.split('/').some(p=>p.startsWith('.'))) { res.writeHead(400).end(); return; }
    let file = path.resolve(root,'.'+pathname);
    if (!file.startsWith(root+path.sep) && file!==root) { res.writeHead(403).end(); return; }
    let code=200;
    try { if ((await stat(file)).isDirectory()) file=path.join(file,'index.html'); await stat(file); }
    catch {
      if (process.env.SPA==='true' && !path.extname(pathname) && (req.headers.accept||'').includes('text/html')) file=path.join(root,'index.html');
      else { file=path.join(root,'404.html'); code=404; }
    }
    const body=await readFile(file);
    const headers={'Content-Type':types[path.extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'};
    if(process.env.NOINDEX==='true') headers['X-Robots-Tag']='noindex, nofollow';
    res.writeHead(code,headers); res.end(req.method==='HEAD'?undefined:body);
  } catch { res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'}).end('Not found'); }
}).listen(Number(process.env.PORT),'0.0.0.0');
