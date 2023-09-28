# MultiVSA - DeFi Liquidity Protocol
![MULTIVSA LOGO](URL)

MultiVSA is a decentralized finance (DeFi) liquidity protocol that enables users to lend and borrow Standard Assets supported by PEGO network simultaneously, offering flexibility and efficiency in managing assets within the Pego ecosystem.

## Table of Contents
- [Introduction](#introduction)
- [Project Description](#project-description)
- [Key Features](#key-features)
- [High-Level Specifications](#high-level-specifications)
- [Functional Requirements](#functional-requirements)
- [Project Setup](#project-setup)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

## Introduction
MultiVSA is a DeFi liquidity protocol designed to enhance the decentralized lending and borrowing experience within the Pego network.

## Project Description
MultiVSA allows users to:
- **Lend** their SAs and earn interest based on market dynamics.
- **Borrow** SAs using existing collateral, with specified collateralization requirements.
- **Manage collateral** and prevent default.
- Accurately **calculate and distribute interest** earned by lenders.
- Monitor their **transaction history** including deposits, withdrawals, lending actions, borrowing activities, and interest.

## Key Features
- User Sign-In
- Deposit
- Lending
- Borrowing
- Collateral Management
- Interest Calculation and Distribution
- Transaction Monitoring and History

## High-Level Specifications
- Users can lend their Pego Standard Assets.
- Users can deposit their SAs into the protocol's liquidity pools.
- Users can borrow PSA based on collateral.
- Users can provide collateral assets.
- Users who lend their assets earn interest.
- Intuitive user interface.
- Interest rates determined algorithmically.
- Support system for inquiries.

## Functional Requirements
See the [Functional Requirements Document](./functional_requirements.md) for detailed user stories and comments.

## Project Setup
To set up the MultiVSA project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/ifebrand6/multivsa-pego.git
2. Install dependencies:
cd multivsa
yarn add

3. Configure environment variables:
- Create a `.env` file based on `.env.example` and provide the necessary environment variables.

4. Start the development server:
yarn start
5. Access the application at `http://localhost:3000` in your web browser.

## Live Demo
Check out the live demo of MultiVSA [here](https://www.multivsa-demo.com).

## Contributing
Contributions are welcome! Please see our [Contribution Guidelines](./CONTRIBUTING.md) for more details.

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
