variable "resource_group_name" {
  type        = string
  description = "The name of the resource group"
}

variable "resource_group_location" {
  type        = string
  description = "The name of the resource_group_location"
}

variable "app_service_plan_name" {
  type        = string
  description = "The name of the app_service_plan_name"
}

variable "app_service_name" {
  type        = string
  description = "The name of the app_service_name"
}


variable "sql_server_name" {
  type        = string
  description = "The name of the sql_server_name"
}

variable "sql_database_name" {
  type        = string
  description = "The name of the sql_database_name"
}

variable "sql_admin_login" {
  type        = string
  description = "The name of the sql_admin_login"
}

variable "sql_admin_password" {
  type        = string
  description = "The name of the sql_admin_password"
}

variable "firewall_rule_name" {
  type        = string
  description = "The name of the firewall_rule_name"
}

variable "repo_URL" {
  type        = string
  description = "GitHub repo_URL"
}