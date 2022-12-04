#!/bin/bash
BASEDIR=$(dirname $0)
cd $BASEDIR
. ./venv/bin/activate
flask --debug run --host 0.0.0.0