import {FollowBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFollowBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FollowBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FollowBody();
}
