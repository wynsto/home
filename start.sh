#!/bin/bash
BASEDIR=$(dirname $0)

echo $BASEDIR
cd $BASEDIR
. ./venv/bin/activate
#pip install -r requirements.txt
gunicorn
