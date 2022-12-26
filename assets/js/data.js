
questions = [
  {
    question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
    options: [
      { letter: "A", text: "Amazon EC2 costs are billed on a monthly basis." },
      { letter: "B", text: "Users retain full administrative access to their Amazon EC2 instances." },
      { letter: "C", text: "Amazon EC2 instances can be launched on demand when needed." },
      { letter: "D", text: "Users can permanently run enough instances to handle peak workloads." }
    ],
    answer: { correct: "C", correction: "The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load." }

  },
  {
    question: "Which AWS service would simplify the migration of a database to AWS?",
    options: [
      { letter: "A", text: "AWS Storage Gateway" },
      { letter: "B", text: "AWS Database Migration Service (AWS DMS)" },
      { letter: "C", text: "Amazon EC2" },
      { letter: "D", text: "Amazon AppStream 2.0" }
    ],
    answer: { correct: "B", correction: "AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases." }
  },
  {
    question: "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
    options: [
      { letter: "A", text: "AWS Config" },
      { letter: "B", text: "AWS OpsWorks" },
      { letter: "C", text: "AWS SDK" },
      { letter: "D", text: "AWS Marketplace" }
    ],
    answer: { correct: "D", correction: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS." }

  },
  {
    question: "Which AWS networking service enables a company to create a virtual network within AWS?",
    options: [
      { letter: "A", text: "AWS Config" },
      { letter: "B", text: "Amazon Route 53" },
      { letter: "C", text: "AWS Direct Connect" },
      { letter: "D", text: "Amazon Virtual Private Cloud (Amazon VPC)" }
    ],
    answer: { correct: "D", correction: "Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define." }

  },
  {
    question: "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
    options: [
      { letter: "A", text: "Configuring third-party applications" },
      { letter: "B", text: "Maintaining physical hardware" },
      { letter: "C", text: "Securing application access and data" },
      { letter: "D", text: "Managing guest operating systems" }
    ],
    answer: { correct: "B", correction: "Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model." }

  },
  {
    question: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
    options: [
      { letter: "A", text: "AWS Regions" },
      { letter: "B", text: "Edge locations" },
      { letter: "C", text: "Availability Zones" },
      { letter: "D", text: "Virtual Private Cloud (VPC)" }
    ],
    answer: { correct: "B", correction: "To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide." }

  },
  {
    question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
    options: [
      { letter: "A", text: "Use Amazon Cloud Directory" },
      { letter: "B", text: "Audit AWS Identity and Access Management (IAM) roles" },
      { letter: "C", text: "Enable multi-factor authentication" },
      { letter: "D", text: "Enable AWS CloudTrail" }
    ],
    answer: { correct: "C", correction: "Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources." }

  },
  {
    question: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
    options: [
      { letter: "A", text: "AWS Trusted Advisor" },
      { letter: "B", text: "AWS CloudTrail" },
      { letter: "C", text: "AWS X-Ray" },
      { letter: "D", text: "AWS Identity and Access Management (AWS IAM)" }
    ],
    answer: { correct: "B", correction: "AWS CloudTrail helps users enable governance, compliance, operational auditing, and risk auditing of their AWS accounts. With CloudTrail, users can log, continuously monitor, and retain account activity related to actions across their AWS infrastructure. This includes actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services. With CloudTrail, users can ensure compliance with internal policies and regulations, such as PCI DSS and HIPAA." }

  },
  {
    question: "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
    options: [
      { letter: "A", text: "Amazon Simple Notification Service (Amazon SNS)" },
      { letter: "B", text: "AWS CloudTrail" },
      { letter: "C", text: "AWS Trusted Advisor" },
      { letter: "D", text: "Amazon Route 53" }
    ],
    answer: { correct: "A", correction: "Amazon Simple Notification Service (Amazon SNS) is a fully managed messaging service that makes it easy to set up, operate, and send notifications from the cloud. Amazon SNS can be used to send messages to a large number of subscribers or other applications as SMS, email, and push notifications to mobile devices. Amazon SNS can be used to send alerts based on Amazon CloudWatch alarms." }

  },
  {
    question: "Where can a user find information about prohibited actions on the AWS infrastructure?",
    options: [
      { letter: "A", text: "AWS Trusted Advisor" },
      { letter: "B", text: "AWS Identity and Access Management (IAM)" },
      { letter: "C", text: "AWS Billing Console" },
      { letter: "D", text: "AWS Acceptable Use Policy" }
    ],
    answer: { correct: "D", correction: "The AWS Acceptable Use Policy outlines prohibited actions on the AWS infrastructure. This policy is designed to help ensure that the AWS infrastructure is used in a manner that is consistent with its intended purpose as a cloud computing platform and to protect the integrity, security, and availability of the AWS infrastructure and the data of AWS customers. It is the responsibility of AWS customers to ensure that their use of the AWS infrastructure complies with the AWS Acceptable Use Policy." }

  }
]

