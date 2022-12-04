import {Source} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Source {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Source();
}
