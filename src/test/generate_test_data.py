import scipy as sp
import scipy.stats as st

def generate_lngamma_function_test_data(filename):
    """
    """

    with open(filename, 'wb+') as datafile:
        values = []
        for x in xrange(1, 5000):
            value = sp.special.gammaln(x)
            values.append((x, value))
            
        datafile.write('\n'.join(['%s,%s' % (x, v) for x, v in values]))


def generate_beta_pdf_test_data(filename):
    """
    """

    with open(filename, 'wb+') as datafile:
        values = []

        for a in xrange(2, 300, 100):
            for b in xrange(2, 300, 100):
                for x in xrange (1, 10):
                    arg = x/10.0
                    value = st.beta(a, b).pdf(arg)
                    values.append('%s,%s,%s,%s' % (a, b, arg, value))
            
        datafile.write('\n'.join(values))


if __name__ == '__main__':

    print 'Generating test data...'
    generate_lngamma_function_test_data('test/gammaln.csv')
    generate_beta_pdf_test_data('test/betapdf.csv')
    print 'Finished.'
    

    
    
