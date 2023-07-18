interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator', 'Customer Service Representative', 'Driver'],
  tenantName: 'Company',
  applicationName: 'CarUs',
  addOns: ['chat', 'notifications', 'file'],
};
