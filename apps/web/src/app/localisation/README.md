# Translations

Translations can be found in `steamapps/common/Stellaris/localisation/english/l_english.yml`.
Use regex `([\w_]+):\d (.*)\n` and replacement `"$1": $2,\n` to convert the YML format to JSON.
