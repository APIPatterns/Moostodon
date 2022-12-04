import {ConfigurationAccounts} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfigurationAccountsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfigurationAccounts {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfigurationAccounts();
}
