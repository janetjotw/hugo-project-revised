var relearn_searchindex = [
  {
    "breadcrumb": "Python - Boto3 and AWS RDS",
    "content": "",
    "description": "",
    "tags": [],
    "title": "First-Chapters",
    "uri": "/first-chapter/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Introduction In the past, you would have created a relational database using the user interface or the SQL client for database creation, management, and administration. RDS is the Relational Database Service of AWS to set up, create, and operate a relational database on the AWS Cloud.\nIn this how-to guide, you will learn how to install and configure a Python SDK library called Boto3. The Boto3 library will be used to programmatically call the interface of AWS RDS API to create and manage a database, which is covered under References.\nPre-requisites AWS account\nAWS Access Key\nPython\nBoto3\nGet started You must sign in to AWS to create an account. After you create an account, it is advisable to create an IAM user and create Access Keys. Access keys consist of an Access Key ID and a Secret Access Key.\nIf you are on a Mac, open your terminal and install Python. Check the version. Note: If you have an older version of Python 2.7.xx, do not use it. Install the latest version of Python.\npython3 Python 3.9.5 (default, May 4 2021, 03:36:27) Install Boto3. Boto3 is the AWS SDK for Python to access AWS resources through an API. Install pip which is a package manager for Python.\npython3 -m pip install boto3 Type the command to see the Boto3 version\npython3 -c \"import boto3, sys; print(f'{sys.version} \\nboto3: {boto3.__version__}')\" Alternatively, you can check the version below.\npip show boto3 Name: boto3 Version: 1.24.50 Summary: The AWS SDK for Python Home-page: https://github.com/boto/boto3 Author: Amazon Web Services Author-email: License: Apache License 2.0 Location: /usr/local/lib/python3.9/site-packages Requires: botocore, jmespath, s3transfer Configure aws-cli The AWS Command Line Interface is a unified tool to manage your AWS services.\nOn your terminal, configure AWS cli options and you will be prompted to enter the AWS Access Key ID and AWS Secret Access Key ID which you created earlier from Step1.\nNote: You can try these instructions on the AWS Cloud shell on the Console too.\naws configure AWS Access Key ID [****************YRMU]:xxxxxxxxxxx AWS Secret Access Key [****************yXT7]: xxxxxxxxxx Default region name [yes]: us-east-1 Default output format [None]: The set up is ready. Refer to the API Reference for AWS RDS to run a Python SDK to create and stop the MySQL database. References Boto3 docs - quickstart to install Python and Boto3.",
    "description": "Introduction In the past, you would have created a relational database using the user interface or the SQL client for database creation, management, and administration. RDS is the Relational Database Service of AWS to set up, create, and operate a relational database on the AWS Cloud.\nIn this how-to guide, you will learn how to install and configure a Python SDK library called Boto3. The Boto3 library will be used to programmatically call the interface of AWS RDS API to create and manage a database, which is covered under References.",
    "tags": [],
    "title": "Python - Boto3 and AWS RDS",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Python - Boto3 and AWS RDS",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Python - Boto3 and AWS RDS",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
