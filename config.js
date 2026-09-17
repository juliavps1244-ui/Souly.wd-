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

// O HTML principal ainda carrega o SDK 17 antes deste arquivo.
// Carregamos o bundle atual durante o parsing para disponibilizar TablesDB
// antes do restante do aplicativo executar.
if (typeof document !== "undefined" && document.readyState === "loading") {
  document.write('<script src="https://cdn.jsdelivr.net/npm/appwrite@27.0.0"></script>');
}
