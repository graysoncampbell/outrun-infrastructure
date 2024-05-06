
variable "env" {
  type    = string
  default = "dev"
}

locals {
  default_tags = {
    Product     = "Outrun",
    Environment = var.env,
    Application = "outrun_backend"
  }
}

module "mongo" {
  source = "./mongo"
}