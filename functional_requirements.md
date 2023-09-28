# Functional Requirements for MultiVSA

This document outlines the functional requirements for the MultiVSA project, a DeFi liquidity protocol for lending and borrowing Pego Standard Assets (PSAs).

## User Stories and Comments

### User Sign In

- **User Story**: As a User, I can sign in with my wallet.
- **Comments**:
  - Users should be able to sign in using their Pego wallet addresses.

### Lending

- **User Story**: As a user, I can lend my PSA assets to the protocol and gain interest based on the market rate and dynamics of the Pego market.
- **Comments**:
  - Users should be able to lend their PSA assets to the protocol.
  - The interest should be automatically calculated based on market dynamics.
  - The protocol should update the interest rate.

### Borrowing

- **User Story**: As a user, I should be able to utilize my existing collateral to borrow additional PSA from the liquidity pool. I should be able to see the collateralization requirements and specify the maximum borrowing limits based on the collateral provided.
- **Comments**:
  - Users should be able to borrow PSA.
  - The user's ability to borrow should be based on existing collateral, with a formula to calculate the amount of assets to borrow.
  - There should be a method to restrict and display an error when a user does not meet the collateralization requirements.

### Collateral Management

- **User Story**: As an admin, I can track and manage collateral provided by borrowers, and update the collateralization ratios to prevent default.
- **Comments**:
  - Admins should have access to a dashboard to track collateral.
  - Admins should be able to manage collateral and adjust collateralization ratios to mitigate the risk of default.

### Interest Calculation and Distribution

- **User Story**: MultiVSA protocol should accurately calculate and distribute interest earned by lenders based on their participation in the lending pools.
- **Comments**:
  - Develop an interest model that algorithmically calculates the interest rate to be earned per lender.

### Transaction Monitoring and History

- **User Story**: As a user, I can track and monitor my transaction history, including deposits, withdrawals, lending actions, borrowing activities, and interest.
- **Comments**:
  - Users should be able to view their deposits history.
  - Users should be able to view their withdrawals history.
  - Users should be able to view their lending actions history.
  - Users should be able to view their borrowing activities.
  - Users should be able to view their interest rate history.

### Deposit

- **User Story**: As a user, I can deposit my assets from my wallet into the pool.
- **Comments**:
  - Users should have the capability to deposit their PSA assets into the protocol's liquidity pools.

## Additional Functional Requirements

- **Interoperability**: Explore options for interoperability with other blockchains to enable deposit and lending from different blockchain networks.

These functional requirements outline the core features and user interactions expected in the MultiVSA project.
