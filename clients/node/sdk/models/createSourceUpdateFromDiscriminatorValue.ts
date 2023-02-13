import {SourceUpdate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSourceUpdateFromDiscriminatorValue(parseNode: ParseNode | undefined) : SourceUpdate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SourceUpdate();
}
