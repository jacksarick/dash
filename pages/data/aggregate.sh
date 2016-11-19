#!/bin/bash

cd ${0%/*}
echo "[" > aggregate.json

curl http://localhost:8000/impressions?dc=NA >> aggregate.json
echo "," >> aggregate.json

curl http://localhost:8000/impressions?dc=EU >> aggregate.json
echo "," >> aggregate.json

curl http://localhost:8000/impressions?dc=AS >> aggregate.json
echo "," >> aggregate.json

echo "]" >> aggregate.json