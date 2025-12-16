# Platform Engineering Projects

Open source contributions to Kubernetes, AWS, and cloud infrastructure tooling.

---

## AWS Service Operator

Contributed to the design and development of the AWS Service Operator for Kubernetes, enabling management of AWS resources as Custom Resource Definitions (CRDs).

**What It Does**: Allows Kubernetes users to provision and manage AWS services (S3, DynamoDB, SNS, SQS, etc.) using native Kubernetes manifests.

**Technologies**: Kubernetes, AWS, Go

**Repository**: [github.com/amazon-archives/aws-service-operator](https://github.com/amazon-archives/aws-service-operator)

---

## AWS VPN Controller

Authored the AWS VPN Controller, a Kubernetes Controller that manages AWS VPNs as Custom Resources.

**What It Does**: Enables declarative management of AWS VPN connections through Kubernetes custom resources.

**Technologies**: Kubernetes, AWS, Go

**Repository**: [github.com/awslabs/aws-vpn-controller](https://github.com/awslabs/aws-vpn-controller)

---

## AWS EKS Cluster Controller

Participated in design and development of the AWS EKS Cluster Controller for managing second-tier Kubernetes clusters as Custom Resources.

**What It Does**: Enables management of multiple EKS clusters from a central management cluster using Kubernetes-native patterns.

**Technologies**: Kubernetes, AWS EKS, Go

**Repository**: [github.com/awslabs/aws-eks-cluster-controller](https://github.com/awslabs/aws-eks-cluster-controller)

---

## AWS Glacier Cleaner

Authored a Python application that identifies and deletes all AWS Glacier Archives and Vaults within an AWS Account.

**What It Does**: Facilitates bulk cleanup of AWS Glacier Vaults, handling the complex process of inventory retrieval and archive deletion.

**Technologies**: Python, AWS, Boto3

**Repository**: [github.com/ckrough/aws-glacier-cleaner](https://github.com/ckrough/aws-glacier-cleaner)

---

## Other Contributions

**Linux From Scratch (LFS)**: Contributed documentation, code, and processes to enhance the open-source Linux education project.

**DataDog Agent**: Added ability to select processes to monitor by regex pattern match. [PR #1375](https://github.com/DataDog/dd-agent/pull/1375)
