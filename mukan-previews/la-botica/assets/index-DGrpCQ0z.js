const texts=await Promise.all(Array.from({length:8},(_,i)=>fetch(new URL(`./_gz/p${i}.b64`,import.meta.url)).then(r=>{if(!r.ok)throw new Error('b64 '+i+' '+r.status);return r.text()})));
const bin=Uint8Array.from(atob(texts.join('').replace(/\s+/g,'')),c=>c.charCodeAt(0));
const buf=await new Response(new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
await import(URL.createObjectURL(new Blob([buf],{type:'text/javascript'})));
