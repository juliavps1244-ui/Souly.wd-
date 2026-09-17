// SOULY CONTROL — configuração pública do Appwrite
// Estes IDs são públicos e podem ficar no front-end.
// NÃO coloque API Key, secret ou senha neste arquivo.
window.SOULY_CONFIG = {
  APPWRITE_ENDPOINT: "https://nyc.cloud.appwrite.io/v1",
  APPWRITE_PROJECT_ID: "6aaaee170005b2f8b70a",
  APPWRITE_DATABASE_ID: "6aaaef540023076731cc",
  APPWRITE_TABLE_ID: "6aaaef6a000e2b07a612",
  APPWRITE_BUCKET_ID: "6aaaf2c1000ad898b784",
  ADMIN_EMAIL: "juliavps1244@gmail.com"
};

// Compatibilidade do Souly Control com o Appwrite Web SDK 17 via CDN.
// Essa versão usa parâmetros posicionais em alguns métodos, enquanto o app
// foi escrito com o formato de objeto usado nas versões/documentação mais novas.
(function applySoulyAppwriteCompat(){
  if (!window.Appwrite) return;

  const A = window.Appwrite.Account && window.Appwrite.Account.prototype;
  if (A && !A.__soulyCompat) {
    const originalLogin = A.createEmailPasswordSession;
    if (typeof originalLogin === 'function') {
      A.createEmailPasswordSession = function(emailOrOptions, password){
        if (emailOrOptions && typeof emailOrOptions === 'object') {
          return originalLogin.call(this, emailOrOptions.email, emailOrOptions.password);
        }
        return originalLogin.call(this, emailOrOptions, password);
      };
    }

    const originalDeleteSession = A.deleteSession;
    if (typeof originalDeleteSession === 'function') {
      A.deleteSession = function(sessionOrOptions){
        if (sessionOrOptions && typeof sessionOrOptions === 'object') {
          return originalDeleteSession.call(this, sessionOrOptions.sessionId);
        }
        return originalDeleteSession.call(this, sessionOrOptions);
      };
    }
    A.__soulyCompat = true;
  }

  const S = window.Appwrite.Storage && window.Appwrite.Storage.prototype;
  if (S && !S.__soulyCompat) {
    const createFile = S.createFile;
    if (typeof createFile === 'function') {
      S.createFile = function(a,b,c,d,e){
        if (a && typeof a === 'object' && !(a instanceof Blob)) {
          return createFile.call(this, a.bucketId, a.fileId, a.file, a.permissions, a.onProgress);
        }
        return createFile.call(this, a,b,c,d,e);
      };
    }
    const deleteFile = S.deleteFile;
    if (typeof deleteFile === 'function') {
      S.deleteFile = function(a,b){
        if (a && typeof a === 'object') return deleteFile.call(this, a.bucketId, a.fileId);
        return deleteFile.call(this, a,b);
      };
    }
    const getFileDownload = S.getFileDownload;
    if (typeof getFileDownload === 'function') {
      S.getFileDownload = function(a,b){
        if (a && typeof a === 'object') return getFileDownload.call(this, a.bucketId, a.fileId);
        return getFileDownload.call(this, a,b);
      };
    }
    S.__soulyCompat = true;
  }
})();
