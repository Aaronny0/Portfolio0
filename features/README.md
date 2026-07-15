# Features

Chaque dossier de `features/` représente un domaine métier autonome et expose une API publique intentionnelle.

Domaines prévus : `auth`, `companies`, `services`, `briefs`, `projects`, `messaging`, `files`, `quotes`, `invoices`, `portfolio`, `blog` et `notifications`.

Un domaine peut contenir ses composants, schémas de validation, actions serveur, requêtes et types internes. Il ne doit pas importer directement les fichiers internes d’un autre domaine.
