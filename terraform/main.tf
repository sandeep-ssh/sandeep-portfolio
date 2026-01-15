locals {
  common_tags = {
    Project     = var.project_name
    ManagedBy   = "Terraform"
    Owner       = "SandeepHegde"
    Environment = "prod"
  }
}

# Apply tags globally
provider "aws" {
  region = var.aws_region

  default_tags {
    tags = local.common_tags
  }
}
provider "aws" {
  region = var.region
}

# S3 + CloudFront resources are declared
# in s3.tf and cloudfront.tf
# Terraform automatically loads them