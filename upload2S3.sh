#!/bin/bash
echo “DELETING OLD FILES…”
aws s3 rm s3://notes19-app-deployment/ --recursive
echo “UPLOADING NEW FILES…”
aws s3 cp dist/ s3://notes19-app-deployment/ --recursive
echo “SUCCESS!”
