export const config = {
  "dev": {
    "username": process.env.username,
    "password": process.env.password,
    "database": process.env.database,
    "host": process.env.host,
    "dialect": process.env.dialect,
    "aws_reigion": process.env.aws_reigion,
    "aws_profile": process.env.aws_profile,
    "aws_media_bucket": process.env.aws_media_bucket
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
