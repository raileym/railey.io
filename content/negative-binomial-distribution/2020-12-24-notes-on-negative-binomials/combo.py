def perm(n,m):
    if m==0:
        return perm(n,1)
    if n==0:
        return 1
    if n==1:
        return 1
    if n==m:
        return 1
    if n>m:
        return n*perm(n-1, m)
    
def combo(n,m):
    return perm(n,m)/perm(n-m,1)
    

