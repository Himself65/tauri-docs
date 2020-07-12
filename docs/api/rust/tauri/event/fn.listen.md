---
title: "fn.listen"
---

# Function [tauri](/docs/api/rust/tauri/../index.html)::​[event](/docs/api/rust/tauri/index.html)::​[listen](/docs/api/rust/tauri/)

    pub fn listen<F: FnMut(Option<String>) + Send + 'static>(
        id: impl Into<String>, 
        handler: F
    )

Adds an event listener for JS events.
