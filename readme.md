###
###
sabrinaunddavidheiraten.ch
==========================

YouTube Keys erlangen
---------------------

Zuerst folgende URL im browser aufrufen:
https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/youtube&response_type=code&access_type=offline&redirect_uri=https://sabrinaunddavidheiraten.ch&client_id=716004418210-ttpb8iq7us0qim2f3c7vcuh5a9ladm93.apps.googleusercontent.com

Dann aus der URL den "code" auslesen.

Dann folgenden Request machen:
POST https://accounts.google.com/o/oauth2/token
BODY (url encoded): ?grant_type=authorization_code&client_id=716004418210-ttpb8iq7us0qim2f3c7vcuh5a9ladm93.apps.googleusercontent.com&client_secret=CLIENT_SECRET&redirect_uri=https://sabrinaunddavid.ch&code=CODE

Dann das "refresh_token" auslesen und in die Config datei eintragen.
Das refresh_token läuft nach 6 Monaten ohne nutzung ab.

### wieso kein service key?
Ein service account hat keinen zugriff auf die playlist eines youtube users und ihm kann auch keine berechtigung gewährt werden.
###
###
