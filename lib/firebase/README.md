# Firebase adapters

Ce dossier recevra les adaptateurs techniques Firebase :

- `client.ts` : initialisation du SDK Web, utilisable côté navigateur ;
- `admin.ts` : initialisation du SDK Admin, marquée `server-only` ;
- `auth.ts` : helpers de session et d’autorisation ;
- `converters.ts` : convertisseurs Firestore typés.

Ne jamais importer un module Firebase Admin depuis un Client Component. Les identifiants de service et clés privées restent exclusivement dans les variables d’environnement serveur.
