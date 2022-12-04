import {Relationship} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRelationshipFromDiscriminatorValue(parseNode: ParseNode | undefined) : Relationship {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Relationship();
}
