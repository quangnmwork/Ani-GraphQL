
terraform {
  required_version = "~> 1.3"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

resource "aws_ecr_repository" "repository" {
  name                 = "ani-app"
  image_tag_mutability = "MUTABLE"
  force_delete         = true
  image_scanning_configuration {
    scan_on_push = true
  }
  encryption_configuration {
    encryption_type = "KMS"
  }

  tags = {
    Name  = "worker-repository"
    Group = "dev"
  }
}

resource "aws_ecr_repository_policy" "policy" {
  repository = aws_ecr_repository.repository.name
  policy     = <<EOF
  {
    "Version": "2008-10-17",
    "Statement": [
      {
        "Sid": "adds full ecr access to the ani-app repository",
        "Effect": "Allow",
        "Principal": "*",
        "Action": [
          "ecr:BatchCheckLayerAvailability",
          "ecr:BatchGetImage",
          "ecr:CompleteLayerUpload",
          "ecr:GetDownloadUrlForLayer",
          "ecr:GetLifecyclePolicy",
          "ecr:InitiateLayerUpload",
          "ecr:PutImage",
          "ecr:UploadLayerPart",
          "ecr:GetAuthorizationToken"
        ]
      }
    ]
  }
  EOF
}

# main.tf
resource "aws_ecs_cluster" "ani_cluster" {
  name = "ani_cluster" # Name your cluster here

}

resource "aws_ecs_task_definition" "ani_task_definition" {
  family       = "ani_cluster"
  cpu          = 1024
  memory       = 2048
  network_mode = "awsvpc"
  container_definitions = jsonencode([
    {
      name      = "ani_task",
      image     = "${aws_ecr_repository.repository.repository_url}",
      essential = true
      portMappings = [
        {
          containerPort = 80
          hostPort      = 80
        }
      ]
      network_mode = "awsvpc"

    }
  ])

  requires_compatibilities = ["FARGATE"]
  task_role_arn            = "arn:aws:iam::007142787967:role/ecsUdemy"
  execution_role_arn       = "arn:aws:iam::007142787967:role/ecsUdemy"
}



# data "aws_ami" "ubuntu" {
#   most_recent = true
#   filter {
#     name   = "name"
#     values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
#   }

#   filter {
#     name   = "virtualization-type"
#     values = ["hvm"]
#   }

#   owners = ["099720109477"] # Canonical
# }

# resource "aws_instance" "ani-dev-instance" {

#   ami           = data.aws_ami.ubuntu.id
#   instance_type = "t2.micro"


#   tags = {
#     "name" = "ani-app"
#   }
# }
