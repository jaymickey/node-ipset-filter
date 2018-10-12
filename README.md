# Node IPSet Filter

Node application that checks IP addresses against the Firehol IPSet Blocklists: [https://github.com/firehol/blocklist-ipsets](https://github.com/firehol/blocklist-ipsets)

## Details

Initially it will only check against the `firehol-level1.netset` blacklist. Plan for further development includes:

- Execute Lambda to populate 2 Redis tables:
  - One with unique IPs only from all specified lists.
  - One with subnets (e.g. 0.0.0.0/8).
- Validate the address against the first redis table directly.
- Load the subnets into memory and use `load-ip-set` to validate.

## Deployment

### Requirements

- [Node.js 8+](https://nodejs.org/en/)
- [AWS CLI](https://aws.amazon.com/cli/)
- [Serverless Framework](https://serverless.com/framework/docs/getting-started/)

### Instructions

1. Follow this [guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) to configure AWS credentials if you haven't already.
2. Configure serverless credentials as documented [here](https://serverless.com/framework/docs/providers/aws/guide/credentials/).
3. Clone the repo!
4. Run `sls deploy --stage dev`
