import {FederationUsage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFederationUsageFromDiscriminatorValue(parseNode: ParseNode | undefined) : FederationUsage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FederationUsage();
}
