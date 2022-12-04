import {FeaturedTag} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeaturedTagFromDiscriminatorValue(parseNode: ParseNode | undefined) : FeaturedTag {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FeaturedTag();
}
