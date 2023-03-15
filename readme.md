S C:\xampp\htdocs\Amina> git init
Initialized empty Git repository in C:/xampp/htdocs/Amina/.git/
PS C:\xampp\htdocs\Amina> git help config
PS C:\xampp\htdocs\Amina> git config --global user.email "ibrahimaboubacarcisee@gmail.com"
PS C:\xampp\htdocs\Amina> git config --global user.name "Ibrahim Aboubacar Cisse"         
PS C:\xampp\htdocs\Amina> git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        contact.html
        css/
        images/
        index.html
        moncv.html
        nosservices.html
        quisommesnous.html

nothing added to commit but untracked files present (use "git add" to track)
PS C:\xampp\htdocs\Amina> git add contact.html
PS C:\xampp\htdocs\Amina> git add css         
PS C:\xampp\htdocs\Amina> git add images
PS C:\xampp\htdocs\Amina> git add index.html
PS C:\xampp\htdocs\Amina> git add moncv.html
PS C:\xampp\htdocs\Amina> git add nosservices.html
PS C:\xampp\htdocs\Amina> git add quisommesnous.html
PS C:\xampp\htdocs\Amina> git add readme.md
PS C:\xampp\htdocs\Amina> git status                
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   contact.html
        new file:   css/style.css
        new file:   images/img-01.jpg
        new file:   images/img-02.jpg
        new file:   images/img-03.jpg
        new file:   images/img-04.jpg
        new file:   images/produit-1.jpg
        new file:   images/produit-2.jpg
        new file:   images/produit-3.jpg
        new file:   images/produit-4.jpg
        new file:   index.html
        new file:   moncv.html
        new file:   nosservices.html
        new file:   quisommesnous.html
        new file:   readme.md

PS C:\xampp\htdocs\Amina> git commit -m "premier comit du site"
[master (root-commit) 0e3004b] premier comit du site
 15 files changed, 818 insertions(+)
 create mode 100644 contact.html
 create mode 100644 css/style.css
 create mode 100644 images/img-01.jpg
 create mode 100644 images/img-02.jpg
 create mode 100644 images/img-03.jpg
 create mode 100644 images/img-04.jpg
 create mode 100644 images/produit-1.jpg
 create mode 100644 images/produit-2.jpg
 create mode 100644 images/produit-3.jpg
 create mode 100644 images/produit-4.jpg
 create mode 100644 index.html
 create mode 100644 moncv.html
 create mode 100644 nosservices.html
 create mode 100644 quisommesnous.html
 create mode 100644 readme.md
PS C:\xampp\htdocs\Amina>  git commit -a -m "Commit du site avec readme.md de modifier"        
[master ea59323] Commit du site avec readme.md de modifier
 1 file changed, 50 insertions(+), 1 deletion(-)
PS C:\xampp\htdocs\Amina> 


> envovez git push -u origin main
> git commit -a -m "{commentaire