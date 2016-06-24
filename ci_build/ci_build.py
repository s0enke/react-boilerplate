import boto3
import json

def handler(event, context):

    gordon_context = json.loads(open('.context', 'r').read())
    



if __name__ == "__main__":
    handler({}, {})

