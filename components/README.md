# Components

Les composants sont organisés par responsabilité :

- `ui/` : primitives accessibles, génériques et sans logique métier ;
- `shared/` : composants transversaux à plusieurs espaces ;
- `public/` : composants propres au site public ;
- `client/` : composants du portail client ;
- `admin/` : composants du back-office.

La logique métier et les accès Firebase ne doivent pas être enfouis dans les composants de présentation.
