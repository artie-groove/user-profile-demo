#!/bin/bash
set -e;

# a default non-root role
MONGO_NON_ROOT_ROLE="${MONGO_NON_ROOT_ROLE:-readWrite}"

if [ -n "${DB_USER:-}" ] && [ -n "${DB_PASS:-}" ]; then
	echo "Adding user $DB_USER to $MONGO_INITDB_DATABASE"
	"${mongo[@]}" "$MONGO_INITDB_DATABASE" <<-EOJS
		db.createUser({
			user: $(_js_escape "$DB_USER"),
			pwd: $(_js_escape "$DB_PASS"),
			roles: [ { role: $(_js_escape "$MONGO_NON_ROOT_ROLE"), db: $(_js_escape "$MONGO_INITDB_DATABASE") } ]
			})
	EOJS
else
	# print warning or kill temporary mongo and exit non-zero
	echo "DB_USER and/or DB_PASS are not defined, user hasn't been created"
fi

mongorestore -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD" --authenticationDatabase admin -d "$DB_NAME" /tmp/data