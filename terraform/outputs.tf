output "s3_bucket_name" {
  value = aws_s3_bucket.site.bucket
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.cdn.domain_name
}
output "github_actions_role_arn" {
  value = aws_iam_role.github_actions_role.arn
}
