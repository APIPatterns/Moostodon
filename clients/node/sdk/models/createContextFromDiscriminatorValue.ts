import {Context} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContextFromDiscriminatorValue(parseNode: ParseNode | undefined) : Context {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Context();
}
