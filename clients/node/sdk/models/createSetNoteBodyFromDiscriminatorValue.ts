import {SetNoteBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetNoteBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetNoteBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetNoteBody();
}
