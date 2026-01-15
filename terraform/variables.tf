variable "aws_account_id" {
  type = string
}

variable "github_org" {
  type = string
}

variable "github_repo" {
  type = string
}

variable "portfolio_bucket_name" {
  type = string
}

variable "cloudfront_distribution_id" {
  type = string
}

variable "region" {
  default = "us-east-1"
}
