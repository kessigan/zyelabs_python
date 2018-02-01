import MySQLdb

conn = MySQLdb.connect(host="us-cdbr-iron-east-05.cleardb.net", user="bdc849a9bffd05", passwd="91c4690c", db="heroku_463a04a6e32994b")
cursor = conn.cursor()
