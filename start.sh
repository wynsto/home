#!/bin/bash
BASEDIR=$(dirname start.sh)
. $BASEDIR/venv/bin/activate
#pip install -r requirements.txt
authbind gunicorn
