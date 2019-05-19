+++
draft = true
title = "Testing"

+++

{{< highlight swift >}}
func makeSearch(active: Bool) {
    placeHolderWrapperView.isHidden = active
    tokenBar.makeSearch(active: active)
    tokenBar.updateTextFieldPlaceholder(active: active)
}
{{< /highlight >}}
