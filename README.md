diff --git a/README.md b/README.md
index 9402d05d4942aa5050907ca46d1eb72a9e3c8651..985e933bf7d80b4e085caeb7a5adcd42c468b4d1 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,28 @@
-# witco-ta-template
\ No newline at end of file
+# witco-ta-template
+
+## Supabase backend setup
+
+This project includes a backend setup script at `supabase/setup.sql`.
+
+### What it creates
+- `public.profiles` (role mapping for `coach` / `specialist` / `admin`)
+- `public.clients` with columns expected by the frontend
+- `public.ta_records_v2` for submit/review flow
+- RLS policies for authenticated read/write with role-based specialist access
+- storage policies for the `signatures` bucket
+
+### Apply it
+1. In Supabase, open **SQL Editor**.
+2. Paste `supabase/setup.sql` and run it.
+3. In **Storage**, create a bucket named `signatures` (private recommended).
+4. Add a profile row for your specialist user(s):
+   - `public.profiles.user_id = auth.users.id`
+   - `role = 'specialist'`
+
+### Frontend compatibility notes
+The current frontend:
+- pulls clients from `clients(id, display_name, plan_start, plan_end, work_location)`
+- inserts/updates TA rows in `ta_records_v2`
+- uploads signatures into storage bucket `signatures`
+
+See `index.html` for exact query usage.
