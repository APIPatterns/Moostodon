import {Instance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Instance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Instance();
}
