import {StatusEdit} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStatusEditFromDiscriminatorValue(parseNode: ParseNode | undefined) : StatusEdit {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StatusEdit();
}
