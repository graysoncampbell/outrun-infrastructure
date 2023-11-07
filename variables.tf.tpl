variable "mongodb_atlas_api_pub_key" {
  type = string
  default = "op://dev/mongodb_atlas/public_api_key"
}

variable "mongodb_atlas_api_pri_key" {
  type = string
  default = "op://dev/mongodb_atlas/private_api_key"
}

variable "mongodb_atlas_org_id" {
  type = string
  default = "op://dev/mongodb_atlas/org_id"
}

variable "mongodb_atlas_database_username" {
  type = string
  default = "op://dev/mongodb_atlas/username"
}

variable "mongodb_atlas_project_id" {
  type = string
  default = "op://dev/mongodb_atlas/project_id"
}

variable "mongodb_atlas_database_user_password" {
  type = string
  default = "op://dev/mongodb_atlas/username"
}

variable "mongodb_atlas_accesslistip" {
  type = string
  default = "op://dev/mongodb_atlas/whitelist_ip"
}