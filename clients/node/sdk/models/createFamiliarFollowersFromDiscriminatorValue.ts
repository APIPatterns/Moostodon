import {FamiliarFollowers} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFamiliarFollowersFromDiscriminatorValue(parseNode: ParseNode | undefined) : FamiliarFollowers {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FamiliarFollowers();
}
