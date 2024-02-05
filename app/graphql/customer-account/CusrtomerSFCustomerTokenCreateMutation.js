// https://shopify.dev/docs/api/customer/unstable/mutations/storefrontCustomerAccessTokenCreate
export const CREATE_SF_CUSTOMER_TOKEN_MUTATION = `#graphql
  mutation storefrontCustomerAccessTokenCreate　{
    storefrontCustomerAccessTokenCreate {
      customerAccessToken
      userErrors {
        field
        message
      }
    }
  }
`;
