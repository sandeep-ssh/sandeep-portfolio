resource "aws_iam_policy" "portfolio_policy" {
  name = "PortfolioDeployPolicy"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "S3Deploy"
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:DeleteObject",
          "s3:ListBucket"
        ]
        Resource = [
          "arn:aws:s3:::${var.portfolio_bucket_name}",
          "arn:aws:s3:::${var.portfolio_bucket_name}/*"
        ]
      },
      {
        Sid    = "CloudFrontInvalidation"
        Effect = "Allow"
        Action = "cloudfront:CreateInvalidation"
        Resource = "arn:aws:cloudfront::${var.aws_account_id}:distribution/${var.cloudfront_distribution_id}"
      }
    ]
  })
}
